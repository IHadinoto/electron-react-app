import { DataWithErrorType, ErrorType } from "@gd-react/error";
import { Stats } from "fs";
import { PortInfo } from "serialport";

export interface IElectronAPI {
  // fs
  readDir: (dirpath: string) => Promise<DataWithErrorType<string[]>>,
  mkdir: (dirpath: string) =>Promise<ErrorType>,
  access: (filepath: string) => Promise<DataWithErrorType<boolean>>,
  stat: (filepath: string) => Promise<DataWithErrorType<Stats>>,
  readFile: (filepath: string, encoding: EncodingType) => Promise<DataWithErrorType<string>>,
  writeFile: (filepath: string, contents: string, encoding: EncodingType) => Promise<ErrorType>,
  appendFile: (filepath: string, contents: string, encoding: EncodingType) => Promise<ErrorType>,
  copyFile: (filepath: string, destpath: string) => Promise<ErrorType>,
  unlink: (filepath: string) => Promise<ErrorType>,

  // Serial Port
  listSerialPort: () => Promise<PortInfo[]>,
  connectToSerialPort: (path) => string | null,
  writeToSerialPort: (message) => boolean,
  onIncomingData: (data) => void,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}