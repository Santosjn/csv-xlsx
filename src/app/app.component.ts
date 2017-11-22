import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


import * as alaSQLSpace from 'alasql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DatePipe
  ]
})
export class AppComponent implements OnInit { 

  constructor(
    private datePipe: DatePipe
  ){}


  ngOnInit(): void { }
  
//   public testAlaSQLExcelExport(): void {
//     var data1 = [{ a: 1, b: 10 }, { a: 2, b: 20 }];
//     var data2 = [{ a: 100, b: 10 }, { a: 200, b: 20 }];
//     var opts = [{ sheetid: 'Good', header: true }, { sheetid: 'Two', header: false }];
//     var res = alasql('SELECT INTO XLSX("MyAwesomeData.xlsx",?) FROM ?', [opts, [data1, data2]]);
    
//     console.log(res, '-------res------');
    
//  }

toExcel() { 

    let fileName = 'Reuniao-' + this.datePipe.transform(Date.now(), 'ddMMyyyy-hhmmss'); 

    var opts = [{headers: true}];

    var search = alasql('SEARCH / * participants FROM ?',[data1]);

    console.log('-----search---', search);
    

    var res = alasql(
      'SELECT INTO XLSX("' + fileName + '.xlsx",?) FROM ?', 
      [opts, [data1]]
    );    
   
}

  toCSV() {

    let fileName = 'Reuniao-' + this.datePipe.transform(Date.now(), 'ddMMyyyy-hhmmss'); 

    var opts = [{headers: true}]
    var res2 = alasql(
      'SELECT * INTO CSV("' + fileName + '.csv",?) FROM ?', 
      [opts, data1]
    );

  }

  
}

export const data1 = [{
  "id": 97,
  "number": "0001/2017",
  "date": "2017-07-28T19:21:11",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [],
  "note": "<p>sadsdsfszfdsfsf</p>",
  "local": "sdaad"
}, {
  "id": 98,
  "number": "0002/2017",
  "date": "2017-07-28T19:22:44",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 98,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "d26b9301-98c8-8e29-0070-4057de70b2e1"
  }],
  "note": "<p>a\\sdfzsdfzsdf</p>",
  "local": "sadfszdf"
}, {
  "id": 99,
  "number": "0003/2017",
  "date": "2017-07-27T19:26:16",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 99,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "a9bf2290-b1bf-346a-6197-c673b942d9c6"
  }],
  "note": "<p>a\\d\\asda\\sdsad</p>",
  "local": "sd\\asdad"
}, {
  "id": 100,
  "number": "0004/2017",
  "date": "2017-07-28T19:27:50",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 100,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "966aaf6c-1e8f-d272-67fd-943b7808031b"
  }],
  "note": "<p>TESTANDO</p>",
  "local": "SDFDSFSDF"
}, {
  "id": 101,
  "number": "0005/2017",
  "date": "2017-07-28T19:30:10",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 101,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fe0e0f1f-30ae-aad2-a45d-c8f2f90ee0df"
  }],
  "note": "<p>s\\dsds\\fdsfsdzgdgfd</p>",
  "local": "sadasdadad"
}, {
  "id": 102,
  "number": "0006/2017",
  "date": "2017-07-28T19:32:47",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 102,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "368236d1-5101-2136-da7c-d4203389cf3c"
  }],
  "note": "<p>stestando</p>",
  "local": "fdsfs\\fdsf"
}, {
  "id": 103,
  "number": "0007/2017",
  "date": "2017-07-28T19:36:38",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 103,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "45b01b23-c23a-7239-f817-ceb5eaf24955"
  }],
  "note": "<p>sdfsfbszdfgbusdhbfhbsdfnszdfdsf</p>",
  "local": "Sala 8"
}, {
  "id": 104,
  "number": "0008/2017",
  "date": "2017-09-20T15:47:20",
  "status": "TO_BE_EXECUTED",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 104,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "9cc081ca-e1ca-e7c4-80fe-9e3a82ad985d"
  }],
  "note": "<p>testando</p>",
  "local": "sda\\sdsadsad"
}, {
  "id": 105,
  "number": "0009/2017",
  "date": "2017-07-28T22:30:06",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 105,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "dd9a21ca-5658-6908-e7ba-8e9001a03eb0"
  }],
  "note": "<p>Testando <strong>reunião </strong></p>",
  "local": "Sala 4"
}, {
  "id": 113,
  "number": "0012/2017",
  "date": "2017-08-03T12:00:09",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 113,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "04694543-0782-67c7-5ead-18d066654614"
  }],
  "note": "<p>teste</p>",
  "local": "Teste"
}, {
  "id": 114,
  "number": "0013/2017",
  "date": "2017-08-03T12:00:49",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 114,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "839f954b-2a0a-3394-e10b-c971438dc6a8"
  }],
  "note": "<p>asdfasdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 115,
  "number": "0014/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 115,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "0b55c78d-feb7-2e1b-3c14-82edca27c793"
  }],
  "note": "<p>testes</p>",
  "local": "teste"
}, {
  "id": 116,
  "number": "0015/2017",
  "date": "2017-08-03T12:00:59",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 116,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "9cf7f540-aeb5-f411-bd11-e4f72c028a30"
  }],
  "note": "<p>Testsestestestes</p>",
  "local": "Testetsesteste"
}, {
  "id": 117,
  "number": "0016/2017",
  "date": "2017-08-03T12:00:43",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 117,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "ef755204-3c42-dca2-6016-f9d5a1a00576"
  }],
  "note": "<p>testeste</p>",
  "local": "asdfasd"
}, {
  "id": 118,
  "number": "0017/2017",
  "date": "2017-08-03T12:00:30",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 118,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "6f1461a7-121b-7ba7-8cb2-a7b484f6b4ca"
  }],
  "note": "<p>setsetsetsetse</p>",
  "local": "stetsetset"
}, {
  "id": 119,
  "number": "0018/2017",
  "date": "2017-08-03T12:00:34",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 119,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "b218a121-29f4-2a86-942e-da78e5c55077"
  }],
  "note": "<p>testestes</p>",
  "local": "gfdgsdgsdfg"
}, {
  "id": 120,
  "number": "0019/2017",
  "date": "2017-08-03T12:00:07",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 120,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fec139b3-db1a-9e2a-af71-fc43450bd7b9"
  }],
  "note": "<p>hfgdhfghdfgh</p>",
  "local": "fasdfasdfasdf"
}, {
  "id": 121,
  "number": "0020/2017",
  "date": "2017-08-03T12:00:54",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 121,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "727878bd-f334-efc1-a50c-1696f5d51dd2"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "sdf"
}, {
  "id": 122,
  "number": "0021/2017",
  "date": "2017-08-03T12:00:17",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 122,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fc35201a-8b68-04ba-1dd2-c79aa1c632c0"
  }],
  "note": "<p>testsete</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 123,
  "number": "0022/2017",
  "date": "2017-08-03T12:00:20",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 123,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "3ca2382d-cbc6-cfea-53b6-6b6b31c1862b"
  }],
  "note": "<p>stesteste</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 124,
  "number": "0023/2017",
  "date": "2017-08-03T12:00:56",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 124,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "b62ea3c6-582f-e0d8-a7a5-a7f9251b3797"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "fsdfasdfasd"
}, {
  "id": 125,
  "number": "0024/2017",
  "date": "2017-08-03T12:00:03",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 125,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "dc062a11-8cf9-f91d-e656-0c6a9d9e8a53"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 126,
  "number": "0025/2017",
  "date": "2017-08-03T12:00:51",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 126,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "09240466-f465-f71a-f514-9f545de111d4"
  }],
  "note": "<p>hgfdghdfgh</p>",
  "local": "GSDFGSDFGSDFG"
}, {
  "id": 127,
  "number": "0026/2017",
  "date": "2017-08-03T12:00:56",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 127,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "bce996e3-eb00-3766-fba8-b09e8464db05"
  }],
  "note": "<p>asdfasdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 128,
  "number": "0027/2017",
  "date": "2017-08-03T12:00:49",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 128,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "5d72391b-4524-1f6b-ccd2-1e455f9ca963"
  }],
  "note": "<p>asdfasdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 129,
  "number": "0028/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 129,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "4ba38b28-9d4c-5ec1-8e0a-740de8e995f0"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 130,
  "number": "0029/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 130,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "49793fcb-25cf-385e-5891-20cb5e398f04"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 131,
  "number": "0030/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 131,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f77538d0-9d32-16fc-b949-741302efbef1"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 132,
  "number": "0031/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 132,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "1ebac60b-037b-6ea4-2da4-3d28bf1cc759"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 133,
  "number": "0032/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 133,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fc6d5512-b01a-d862-7e1e-48ffb206ec2d"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 134,
  "number": "0033/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 134,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "cd37a013-b20a-0d50-9691-1ab70f542e5d"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 135,
  "number": "0034/2017",
  "date": "2017-08-03T12:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 135,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "017b4400-2c4c-0215-9c2a-4c46049dc177"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfa"
}, {
  "id": 136,
  "number": "0035/2017",
  "date": "2017-08-03T12:00:31",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 136,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "390c39a4-a1bc-37eb-5f2d-dc8b68ada6d7"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 137,
  "number": "0036/2017",
  "date": "2017-08-03T13:00:39",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 137,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fecfd0ce-ba19-e67d-4184-97785a8fe608"
  }],
  "note": "<p>tsetsetes</p>",
  "local": "asdfasdf"
}, {
  "id": 138,
  "number": "0037/2017",
  "date": "2017-08-03T13:00:27",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 138,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "0d16bccd-a434-cf81-aefc-5750fbd505cc"
  }],
  "note": "<p>sfdadfasdf</p>",
  "local": "testste"
}, {
  "id": 139,
  "number": "0038/2017",
  "date": "2017-08-03T13:00:12",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 139,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f38ca940-743f-b31a-a107-9b32b120c2b0"
  }],
  "note": "<p>setsetestse</p>",
  "local": "testesset"
}, {
  "id": 140,
  "number": "0039/2017",
  "date": "2017-08-03T13:00:29",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 140,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "25fb5f49-556e-a43b-ad58-b07c62d78e97"
  }],
  "note": "<p>testeste</p>",
  "local": "hfdhfdghfgh"
}, {
  "id": 141,
  "number": "0040/2017",
  "date": "2017-08-03T13:00:30",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 141,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "fdcd477c-c188-00d8-6092-278db1329f48"
  }],
  "note": "<p>fdsfasdfasdf</p>",
  "local": "sadfasdfasdf"
}, {
  "id": 142,
  "number": "0041/2017",
  "date": "2017-08-03T13:00:23",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 142,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "a75b4034-feac-b815-6ace-0ee79d874de5"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 143,
  "number": "0042/2017",
  "date": "2017-08-03T13:00:27",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 143,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "182f4150-1921-6f89-ec68-ce97d1cd0d30"
  }],
  "note": "<p>asdfas</p>",
  "local": "asdfasdf"
}, {
  "id": 144,
  "number": "0043/2017",
  "date": "2017-08-03T13:00:35",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 144,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f7656b0b-dc2f-6fe6-16d8-b47e61c695be"
  }],
  "note": "<p>fsadfasdfasd</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 145,
  "number": "0044/2017",
  "date": "2017-08-03T13:00:06",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 145,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "3c7f5459-19d5-a680-2eb3-222b7b4ed12c"
  }],
  "note": "<p>sdfasdfasdfsd</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 146,
  "number": "0045/2017",
  "date": "2017-08-03T13:00:25",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 146,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "930e8657-67c2-db49-8bdd-c42c3abe12a2"
  }],
  "note": "<p>asdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 147,
  "number": "0046/2017",
  "date": "2017-08-03T13:00:18",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 147,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f4a0f17a-c5aa-9597-46d1-c4380cfa63b7"
  }],
  "note": "<p>asdfasd</p>",
  "local": "sadfasd"
}, {
  "id": 148,
  "number": "0047/2017",
  "date": "2017-08-03T13:00:56",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 148,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "783e9ab1-22cd-eb27-c320-21b17c76ac51"
  }],
  "note": "<p>sdfasdfasd</p>",
  "local": "asdfasdfasdf"
}, {
  "id": 149,
  "number": "0048/2017",
  "date": "2017-08-03T13:00:01",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 149,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "b45d10fa-c556-ca02-b7ed-2354257589fb"
  }],
  "note": "<p>sdfasdf</p>",
  "local": "asdfasdf"
}, {
  "id": 185,
  "number": "0049/2017",
  "date": "2017-08-14T14:00:56",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [],
  "note": "<p>teste</p>",
  "local": "teste"
}, {
  "id": 218,
  "number": "0050/2017",
  "date": "2017-08-14T14:00:32",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 218,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f67ba6dd-f6e2-40fd-b2d1-98b56e44c749"
  }],
  "note": "<p>teste3</p>",
  "local": "teste3"
}, {
  "id": 219,
  "number": "0051/2017",
  "date": "2017-08-14T15:00:52",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 219,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "4dd2ed1f-1caa-4256-a5c3-733cb4c8e170"
  }],
  "note": "<p>sdfgsdfsd</p>",
  "local": "asdfsad"
}, {
  "id": 220,
  "number": "0052/2017",
  "date": "2017-08-16T09:00:44",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 220,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "0589ac79-70fb-498d-b722-30aad181dfc0"
  }],
  "note": "<p>dasd</p>",
  "local": "Teste 199"
}, {
  "id": 221,
  "number": "0053/2017",
  "date": "2017-08-16T14:00:43",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 221,
    "participantId": 1,
    "name": "Administrator",
    "status": "DECLINED",
    "token": "72ad633b-106f-459d-a259-4e51d8c49a93"
  }],
  "note": "<p>teste lazaro - novo</p>",
  "local": "Teste"
}, {
  "id": 222,
  "number": "0054/2017",
  "date": "2017-08-22T16:00:24",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 222,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "f0a852b6-1ebb-40aa-986d-29e162aff1df"
  }],
  "note": "<p>novo teste</p>",
  "local": "Teste Prospecção"
}, {
  "id": 223,
  "number": "0055/2017",
  "date": "2017-08-31T08:00:22",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 223,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "1bcd40a6-4975-45a6-8aa4-2abd18f2fba1"
  }],
  "note": "<p>new test</p>",
  "local": "New test"
}, {
  "id": 224,
  "number": "0056/2017",
  "date": "2017-08-23T12:00:42",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 224,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "bb2c00a8-b71c-4b95-9a76-20986d1d2335"
  }],
  "note": "<p>NVOVOVOVOVOVOVOVOVf</p>",
  "local": "NOVO TESTE"
}, {
  "id": 225,
  "number": "0057/2017",
  "date": "2017-08-25T11:00:32",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 225,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "0298f222-76f3-4459-8459-3b82091ee652"
  }],
  "note": "<p>dasdasdasdas</p>",
  "local": "dasdasdasdas"
}, {
  "id": 226,
  "number": "0058/2017",
  "date": "2017-08-30T12:00:12",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 226,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "8f6d4794-307a-4fb4-a072-ca743a87d303"
  }],
  "note": "<p>Obs</p>",
  "local": "sala 1001"
}, {
  "id": 227,
  "number": "0059/2017",
  "date": "2017-09-01T13:00:39",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 227,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "d0b57e16-92c1-44b2-9740-5fbb5e03d22e"
  }],
  "note": "<p>Reuniao teste de proposta</p>",
  "local": "sala 2"
}, {
  "id": 228,
  "number": "0060/2017",
  "date": "2017-09-01T14:00:13",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 228,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "7ece48d9-aa8b-4a71-a34d-4a4dab729d63"
  }],
  "note": "<p>hadsgfudksgfuksdgbf</p>",
  "local": "sala 3"
}, {
  "id": 229,
  "number": "0061/2017",
  "date": "2017-09-01T14:00:46",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 229,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "9e2424b6-c9fd-48bc-a551-68059656c67a"
  }],
  "note": "<p>Teste de Geração de prospecções a partir de ações da reunião</p>",
  "local": "SALA 2991"
}, {
  "id": 230,
  "number": "0062/2017",
  "date": "2017-09-01T14:00:09",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 230,
    "participantId": 1,
    "name": "Administrator",
    "status": "CONFIRMED",
    "token": "0db13a78-3822-423c-9762-089c01d703cb"
  }],
  "note": "<p>dasdas</p>",
  "local": "dasdasdasdasd"
}, {
  "id": 231,
  "number": "0063/2017",
  "date": "2017-09-03T01:00:56",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 231,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "50e4eefe-211a-464d-b8ac-3b7befbef1f0"
  }],
  "note": "<p>Cadastro de reunião para teste de fluxo completo</p>",
  "local": "Cachoeira Paulsita"
}, {
  "id": 233,
  "number": "0064/2017",
  "date": "2017-09-06T12:00:19",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 233,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "dec1de28-8470-49f9-8215-9246d124f4ab"
  }],
  "note": "<p>\\asd\\asda</p>",
  "local": "\\d\\as"
}, {
  "id": 234,
  "number": "0065/2017",
  "date": "2017-09-13T12:00:45",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 234,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "d37753d0-c12e-4178-b511-327bd6a20a42"
  }],
  "note": "<p><strong>negrito</strong></p><p><em>italico</em></p><p>xxxxxxxxx</p>",
  "local": "local"
}, {
  "id": 235,
  "number": "0066/2017",
  "date": "2017-09-15T14:00:35",
  "status": "DONE",
  "owner": {
    "id": 2,
    "meetingId": 2,
    "name": "Lázaro"
  },
  "participants": [{
    "id": 1,
    "meetingId": 235,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "7daad202-4709-4ae6-82a6-970ec685d19c"
  }, {
    "id": 2,
    "meetingId": 235,
    "participantId": 2,
    "name": "Lázaro",
    "status": "PENDING",
    "token": "d6893d15-9fd1-408f-9536-5684c510a1b2"
  }, {
    "id": 4,
    "meetingId": 235,
    "participantId": 4,
    "name": "Edson",
    "status": "PENDING",
    "token": "40b73bec-79ed-44c5-ba63-f4ef9ef45eb1"
  }, {
    "id": 3,
    "meetingId": 235,
    "participantId": 3,
    "name": "Dalila",
    "status": "PENDING",
    "token": "1ddb30fe-70fa-4c83-b556-1f458636928f"
  }],
  "note": "<p>reunião x</p>",
  "local": "teste"
}, {
  "id": 236,
  "number": "0067/2017",
  "date": "2017-09-18T09:00:05",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 236,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "c1eaa49a-8861-412d-81ee-ae07fe4da3e2"
  }],
  "note": "<p>teste</p>",
  "local": "teste"
}, {
  "id": 237,
  "number": "0068/2017",
  "date": "2017-09-18T13:00:05",
  "status": "DONE",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 4,
    "meetingId": 237,
    "participantId": 4,
    "name": "Edson",
    "status": "PENDING",
    "token": "5ac7502c-494a-4164-87ac-61b691ef09dc"
  }, {
    "id": 2,
    "meetingId": 237,
    "participantId": 2,
    "name": "Lázaro",
    "status": "CONFIRMED",
    "token": "ac7012b7-771e-4f16-a097-8a2905a748ad"
  }, {
    "id": 3,
    "meetingId": 237,
    "participantId": 3,
    "name": "Dalila",
    "status": "PENDING",
    "token": "3564cad3-ea4d-4571-a7b5-415f19831f58"
  }],
  "note": "<p>Scrum é uma&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/xp/manifesto_agil\" target=\"_blank\" style=\"color: rgb(71, 125, 202);\"><strong>metodologia ágil</strong></a>&nbsp;para gestão e planejamento de projetos de software. No Scrum, os projetos são dividos em ciclos (tipicamente mensais) chamados de&nbsp;<strong>Sprints</strong>. O&nbsp;<strong>Sprint</strong>&nbsp;representa um Time Box dentro do qual um conjunto de atividades deve ser executado.</p><p>&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/xp/manifesto_agil\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(71, 125, 202);\"><strong>Metodologias ágeis</strong></a>&nbsp;de desenvolvimento de software são iterativas, ou seja, o rabalho é dividido em iterações, que são chamadas de Sprints no caso do Scrum. As funcionalidades a serem implementadas em um projeto são mantidas em uma lista que é onhecida como&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/scrum/product_backlog\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(71, 125, 202);\"><strong>Product Backlog</strong></a>. No início de cada Sprint, faz-se um&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/scrum/sprint_planning_meeting\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(71, 125, 202);\"><strong>Sprint Planning Meeting</strong></a>, ou seja, uma reunião de planejamento na qual o&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/scrum/product_owner\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(71, 125, 202);\"><strong>Product Owner</strong></a>&nbsp;prioriza os itens o&nbsp;<a href=\"http://www.desenvolvimentoagil.com.br/scrum/product_backlog\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(71, 125, 202);\"><strong>Product Backlog</strong></a>&nbsp;e a equipe seleciona as atividades que ela será capaz de implementar durante o Sprint que se inicia. As tarefas alocadas em um Sprint são</p>",
  "local": "teste lazaro"
}, {
  "id": 238,
  "number": "0069/2017",
  "date": "2017-10-26T13:00:22",
  "status": "IN_PROGRESS",
  "owner": {
    "id": 1,
    "meetingId": 1,
    "name": "Administrator"
  },
  "participants": [{
    "id": 1,
    "meetingId": 238,
    "participantId": 1,
    "name": "Administrator",
    "status": "PENDING",
    "token": "bb4ac743-0299-4514-84aa-06adb4323333"
  }],
  "note": "<p>123123</p>",
  "local": "123"
}];  
