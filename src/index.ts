import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @tocz9e/jupyterlab-theme-clear extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@tocz9es/jupyterlab-theme-clear:plugin',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = '@tocz9es/jupyterlab-theme-clear/index.css';
    manager.register({
      name: 'Clear Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
