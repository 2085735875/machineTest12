import { Observable } from "rxjs";

export interface Iproduct {
    pname: string;
    pid: string;
    pstatus: "In-Progress" | "Delivered" | "Dispatched";
    pUrl: string;
    canReturn : '1' | '0';
}


export interface IcanDeactivateComp {
    canDeactive : () =>boolean | Promise<boolean> | Observable<boolean>
}