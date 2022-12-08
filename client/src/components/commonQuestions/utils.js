export const getAnswers = () => {
  return (
    <ul style={{ marginLeft: 25 }}>
      <li>第一次使用標靶藥物治療前</li>
      <li>癌症產生抗藥、復發或轉移時，須尋找其他治療策略時</li>
      <li>癌症治療後定期追蹤</li>
      <li>未知原發性的腫瘤</li>
    </ul>
  );
};

export const quesitonsArray = [
  {
    id: 1,
    question: "多久才會拿到報告？",
    answer:
      "醫院病理科切片流程大約需要4-7個日曆天的時間(每家醫院作業時間稍有不同)，檢測約14天，完成送檢後會立即寄送電子報告給您的主治醫師。",
    isOpen: true,
  },
  {
    id: 2,
    question: "我適合做全方位癌症基因檢測嗎？",
    answer:
      "建議您可以先詢問您的主治醫師，針對罹癌確診、治療瓶頸、抗藥或是追蹤復發...等不同的狀況，都須由醫師協助評估，選擇適合的檢測。",
    isOpen: true,
  },
  {
    id: 3,
    question: "在什麼時機點做癌症基因檢測最好呢？",
    answer: getAnswers(),
    isOpen: true,
  },
];
