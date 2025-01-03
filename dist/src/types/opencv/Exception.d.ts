import { int } from "./_types";
/**
 * This class encapsulates all or almost all necessary information about the error happened in the
 * program. The exception is usually constructed and thrown implicitly via CV_Error and CV_Error_
 * macros.
 *
 * [error](#db/de0/group__core__utils_1gacbd081fdb20423a63cf731569ba70b2b})
 *
 * Source:
 * [opencv2/core.hpp](https://github.com/opencv/opencv/tree/master/modules/core/include/opencv2/core.hpp#L135).
 *
 */
export declare class Exception {
    /**
     *   CVStatus
     *
     */
    code: int;
    err: String;
    file: String;
    func: String;
    line: int;
    msg: String;
    /**
     *   Default constructor
     */
    constructor();
    /**
     *   Full constructor. Normally the constructor is not called explicitly. Instead, the macros
     * [CV_Error()], [CV_Error_()] and [CV_Assert()] are used.
     */
    constructor(_code: int, _err: String, _func: String, _file: String, _line: int);
    formatMessage(): void;
    /**
     *   the error description and the context as a text string.
     */
    what(): any;
}
