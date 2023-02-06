export type TagPairs = {
    event: string,
    site: string,
    date: string,
    round: string,
    white: string,
    black: string,
    result: string,
    opt: Map<string, string>
}

export enum CommonOptionalTags {
    Annotator = "Annotator",
    PlyCount = "PlyCount",
    TimeControl = "TimeControl",
    Time = "Time",
    EndTime = "EndTime",
    Termination = "Termination",
    Mode = "Mode",
    FEN = "FEN",
    ECO = "ECO",
    WhiteElo = "WhiteElo",
    BlackElo = "BlackElo"
}