import axios from "axios";
import { Pinger } from "../../interfaces";
import { ApiService } from "./api.service";
import { Urls } from "./config";

export class PingerService extends ApiService{

  private static readonly baseUrl = Urls.PINGER + '/';
  private static readonly listUrl = Urls.PINGER + '/list';
  private static readonly pingUrl = Urls.PINGER + '/ping';
  

  public static create(pinger: Pinger): Promise<Pinger> {
      return axios.post(this.baseUrl,pinger)
  }

  public static list(): Promise<Array<Pinger>> {
    console.log(Urls.PINGER)
    console.log(process.env.NEXT_PUBLIC_API_HOST)
    return this.get(this.listUrl);
  }

  public static update(pinger: Pinger): Promise<Pinger> {
    return axios.put(Urls.PINGER, pinger);
  }

  public static delete(pinger: Pinger): Promise<Pinger> {
    return axios.delete(`${Urls.PINGER}/${pinger.id}`)
  }
}