export interface AlsaOptions
{
    channels?: number;
    debug?: boolean,
    device?: string,
    format?: string,
    periodSize?: number,
    periodTime?: number,
    rate?: 44100;
}