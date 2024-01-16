export interface IFloatingTags {
  direction: string;
  taskbar: { label?: string } | { subtask?: string }[];
  zoomlevel: number;
  listElementWidth: number;
}
