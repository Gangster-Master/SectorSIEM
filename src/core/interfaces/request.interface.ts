export interface RequestInterface {
    jsonrpc: string;
    method: string;
    params: any;
    id: number;
    auth: string | null;
}
