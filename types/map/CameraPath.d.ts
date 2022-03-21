import { FreeCameraPosition } from './cameraHelpers';
import { CurveInterpolatorOptions } from 'curve-interpolator/dist/src/curve-interpolator';
export declare type KeyFrame = {
    time: number;
    camera: FreeCameraPosition;
};
export declare class CameraPath {
    private _frames;
    private _extent;
    private _positionInterpolator;
    private _squadInterpolator;
    private _timeInterpolator;
    constructor(keyFrames: KeyFrame[], opts?: CurveInterpolatorOptions);
    getCameraAtTime(time: number): FreeCameraPosition;
}