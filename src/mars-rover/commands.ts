export const COMMANDS = {
  MOVE: 'M',
  ROTATE_LEFT: 'L',
  ROTATE_RIGHT: 'R'
} as const;

export type Command = typeof COMMANDS[keyof typeof COMMANDS];