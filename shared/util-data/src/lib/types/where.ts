export type Where<Entity> = {
  [P in keyof Entity]?: Entity[P]
}
