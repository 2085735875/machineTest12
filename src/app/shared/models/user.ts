
export interface Iuser {
        userName: string;
        userId: string;
        url : string;
        profession : "Batsmen" | "Bowler" | "Wicket Kipper" | "All-Rounder" | "Captain" | "Voice Captain";
        userRole : "Admin" | "Player"
}