# Mars Rover Kata

## Description
Develop an API that moves rovers around on a plateau on Mars. The plateau is represented as a 10x10 grid, and a rover has state consisting of:
- Position on the grid (X,Y coordinate pair)
- Compass direction (N, S, E, W)

## Input/Output
- **Input**: String of one-character commands (L, R, M)
- **Output**: Final position as "X:Y:Direction" (e.g., "2:3:N")
- **Obstacles**: Prefix with "O:" if obstacle encountered (e.g., "O:1:1:N")

## Command Types
- `L` - Rotate left (90 degrees)
- `R` - Rotate right (90 degrees)  
- `M` - Move forward one grid square

## Test Cases (Prioritized by TDD Rules)

### Phase 1: Empty/Zero Cases (Start Here)
- [x] Empty command returns initial position "0:0:N"

### Phase 2: Move Command (M) - Complete This First
#### Empty → Single → Multiple
- Empty command returns "0:0:N" (foundation from Phase 1)
- [x] Single "M" command moves north to "0:1:N"
- [x] "MM" moves twice north to "0:2:N"
- [x] "MMM" moves three times north to "0:3:N"
- [x] "MMMMMMMMMM" wraps around to "0:0:N" (10 moves)

### Phase 3: Left Rotation (L) - Complete This Second
#### Empty → Single → Multiple
- Empty command returns "0:0:N" (foundation from Phase 1)
- [x] Single "L" command rotates left to "0:0:W"
- [x] "LL" rotates left twice to "0:0:S"
- [x] "LLL" rotates left three times to "0:0:E"
- [ ] "LLLL" rotates left four times back to "0:0:N"

### Phase 4: Right Rotation (R) - Complete This Third
#### Empty → Single → Multiple
- Empty command returns "0:0:N" (foundation from Phase 1)
- [ ] Single "R" command rotates right to "0:0:E"
- [ ] "RR" rotates right twice to "0:0:S"
- [ ] "RRR" rotates right three times to "0:0:W"
- [ ] "RRRR" rotates right four times back to "0:0:N"

### Phase 5: Movement with Direction Changes (After mastering individual commands)
- [ ] "RM" moves east to "1:0:E"
- [ ] "LM" moves west to "9:0:W" (wrap-around)
- [ ] "RRM" moves south to "0:9:S" (wrap-around)
- [ ] "LLM" moves south to "0:9:S" (wrap-around)

### Phase 6: Complex Patterns (Combining different commands)
- [ ] "MMRMMLM" gives "2:3:N" (from kata example)
- [ ] "RMMLM" gives "2:1:N"

### Phase 7: Obstacles (Advanced)
- [ ] Grid with obstacle at (0,3), "MMMM" gives "O:0:2:N"
- [ ] Grid with obstacle at (1,0), "RM" gives "O:0:0:E"

### Phase 8: Edge Cases
- [ ] Invalid commands (ignore or error)
- [ ] Very long command sequences

## Implementation Notes
- Start with the simplest test case (empty command)
- Use baby steps following TDD RED-GREEN-REFACTOR cycle
- Handle wrap-around when rover reaches grid boundaries
- Implement obstacle detection after basic movement works
- Consider using Command pattern for move commands
- Consider using State pattern for direction management

## Grid Specifications
- 10x10 grid (coordinates 0-9)
- Wrap-around at boundaries
- Obstacles can be placed at specific coordinates
- Rover starts at position (0,0) facing North

## Example Interface
```typescript
class MarsRover {
  constructor(grid: Grid);
  execute(command: string): string;
}
``` 
