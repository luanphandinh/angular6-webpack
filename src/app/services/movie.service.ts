import { Injectable } from '@angular/core';

import { GatewayService } from 'app/services/gateway.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private gateWay: GatewayService,
  ) {
  }

}
