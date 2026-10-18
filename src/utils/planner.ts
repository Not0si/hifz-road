export type WeeklyPlanItem = {
  week: number;
  atmanList: number[];
};

export function generateWeeklyPlan(
  selectedAtmanIds: number[],
  durationInMonths: number,
): WeeklyPlanItem[] {
  // الحد الأدنى هو شهر واحد (4 أسابيع)
  const months = Math.max(1, durationInMonths);
  const totalWeeks = months * 4;

  const plan: WeeklyPlanItem[] = [];
  const itemsPerWeek = Math.ceil(selectedAtmanIds.length / totalWeeks);

  let index = 0;
  for (let week = 1; week <= totalWeeks; week++) {
    if (index >= selectedAtmanIds.length) break;
    const weekAtman: number[] = [];
    for (let i = 0; i < itemsPerWeek && index < selectedAtmanIds.length; i++) {
      weekAtman.push(selectedAtmanIds[index]);
      index++;
    }
    plan.push({ week, atmanList: weekAtman });
  }

  return plan;
}
