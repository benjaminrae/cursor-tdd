import { MarsRover } from "./mars-rover";
import { EventDispatcher } from "./event-dispatcher";

export class MissionControl {
  constructor(private rover: MarsRover, private eventDispatcher: EventDispatcher) {}

  sendCommand(command: string): string {
    for (const character of command) {
      const result = this.rover.execute(character);
      if (result) {
        return result;
      }
      
      const events = this.rover.releaseEvents();
      this.eventDispatcher.dispatch(events);
    }
    
    return this.rover.getStatus();
  }
}