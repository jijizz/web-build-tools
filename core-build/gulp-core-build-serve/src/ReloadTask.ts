// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { GulpTask } from '@microsoft/gulp-core-build';
import gulp = require('gulp');

export class ReloadTask extends GulpTask<{}> {
  public name: string = 'reload';

  public executeTask(gulp: gulp.Gulp, completeCallback?: (error?: string) => void): void {
    /* tslint:disable:typedef */
    const gulpConnect = require('gulp-connect');
    /* tslint:enable:typedef */

    gulp.src('')
        .pipe(gulpConnect.reload());

    completeCallback();
  }
}
