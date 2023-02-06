/**
 * Contains all the required PGN tags as well as a map of 
 * optional tags via the `opt` field.
 */
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

/**
 * Some common optional tags used for PGNs mapped to an enum for the sake of ergonomics. 
 * The PGN specification allows for custom tags once the 7 required ones are entered and 
 * these are some of the more common ones that can be found.
 */
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