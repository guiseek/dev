import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./apps/gui/seek/src",
  projectName: "gui-seek",
  outDir: './dist/static',
  routes: {
    '/notes/:note': {
      type: 'contentFolder',
      note: {
        folder: "./content/notes"
      }
    },
  }
};