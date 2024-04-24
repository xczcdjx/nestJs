import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @All('/cat/*')
  async forwardCatRequest(@Req() req: Request, @Res() res: Response) {
    try {
      const url = req.url.replace('/cat', '');
      const response = await this.sendRequest('http://localhost:3001' + url, req);
      return res.status(response.status).send(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
      return res.status(500).send('Internal Server Error');
    }
  }

  @All('/dog/*')
  async forwardDogRequest(@Req() req: Request, @Res() res: Response) {
    try {
      const url = req.url.replace('/dog', '');
      const response = await this.sendRequest('http://localhost:3002' + url, req);
      return res.status(response.status).send(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
      return res.status(500).send('Internal Server Error');
    }
  }

  /*private async sendRequest(url: string, req: Request): Promise<AxiosResponse<any>> {
    const method = req.method;
    switch (method) {
      case 'GET':
        return await this.httpService.get(url).toPromise();
      case 'POST':
        return await this.httpService.post(url, req.body).toPromise();
      case 'PUT':
        return await this.httpService.put(url, req.body).toPromise();
      case 'DELETE':
        return await this.httpService.delete(url).toPromise();
      // 可以添加其他类型的请求
      default:
        return await this.httpService.get(url).toPromise();
    }
  }*/
  private async sendRequest(url: string, req: Request): Promise<AxiosResponse<any>> {
    const method = req.method;
    let params = null;
    let body = null;
    // 如果是 GET 或 DELETE 请求，参数在 query 中
    if (method === 'GET' || method === 'DELETE') {
      params = req.query;
    } else {
      // 如果是 POST 或 PUT 请求，参数在 body 中
      body = req.body;
    }
    // 发送 HTTP 请求并返回响应
    return await this.httpService.request({
      method: method,
      url: url,
      // params: params,
      data: body,
    }).toPromise();
  }
}
