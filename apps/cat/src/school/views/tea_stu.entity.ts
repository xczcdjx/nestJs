import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  name: "tea_stu",
  expression: `
  select s.id sId, s.stu_id sNo, s.stu_name sName, s.sex sSex, t.id tId, t.te_name tName, t.te_class tClass
from student s
         left join teach_class ts on s.stu_id = ts.stu_id
         left join teach t on ts.tea_id = t.id
  `
})
export class TeaStuEntity {
  @ViewColumn()
  sId: number;
  @ViewColumn()
  sNo: number;
  @ViewColumn()
  sName: string;
  @ViewColumn()
  sSex: boolean;
  @ViewColumn()
  tId: number;
  @ViewColumn()
  tClass: string;
}
