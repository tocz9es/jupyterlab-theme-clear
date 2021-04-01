import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @tocz9ea/jupyter-own-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@tocz9ea/jupyter-own-theme:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension @tocz9ea/jupyter-own-theme is activated!');
  }
};

export default extension;
