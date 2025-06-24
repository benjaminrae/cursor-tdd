import { describe, it, expect, vi } from 'vitest';
import { InMemoryEventDispatcher } from './event-dispatcher';
import { RoverRotatedLeft, RoverRotatedRight } from './events';
import { EventHandler } from './event-handler';

describe('InMemoryEventDispatcher', () => {
  it('dispatches events to registered handlers', () => {
    const dispatcher = new InMemoryEventDispatcher();
    const handler = { handle: vi.fn() } as EventHandler<RoverRotatedLeft>;
    
    dispatcher.register(RoverRotatedLeft, handler);
    
    const event = new RoverRotatedLeft();
    dispatcher.dispatch([event]);
    
    expect(handler.handle).toHaveBeenCalledWith(event);
  });

  it('does not call handler for unregistered event types', () => {
    const dispatcher = new InMemoryEventDispatcher();
    const leftHandler = { handle: vi.fn() } as EventHandler<RoverRotatedLeft>;
    
    dispatcher.register(RoverRotatedLeft, leftHandler);
    
    const rightEvent = new RoverRotatedRight();
    dispatcher.dispatch([rightEvent]);
    
    expect(leftHandler.handle).not.toHaveBeenCalled();
  });

  it('dispatches multiple events to their respective handlers', () => {
    const dispatcher = new InMemoryEventDispatcher();
    const leftHandler = { handle: vi.fn() } as EventHandler<RoverRotatedLeft>;
    const rightHandler = { handle: vi.fn() } as EventHandler<RoverRotatedRight>;
    
    dispatcher.register(RoverRotatedLeft, leftHandler);
    dispatcher.register(RoverRotatedRight, rightHandler);
    
    const leftEvent = new RoverRotatedLeft();
    const rightEvent = new RoverRotatedRight();
    dispatcher.dispatch([leftEvent, rightEvent]);
    
    expect(leftHandler.handle).toHaveBeenCalledWith(leftEvent);
    expect(rightHandler.handle).toHaveBeenCalledWith(rightEvent);
  });
});