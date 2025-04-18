window.addEventListener("DOMContentLoaded", () => {
  const addClassToAncestorTable = (selector, className) => {
    let el = document.querySelector(selector)?.parentElement;
    while (el && el.tagName !== 'TABLE') el = el.parentElement;
    el?.classList.add(className);
  };

  const addClassToNextSiblingsWithValue = (values, className) => {
    values.forEach(value => {
      document.querySelectorAll(`input[value="${value}"]`).forEach(input => {
        let sibling = input.nextElementSibling;
        while (sibling && !sibling.classList.contains('gTable3')) {
          sibling = sibling.nextElementSibling;
        }
        sibling?.classList.add(className);
      });
    });
  };

  const addClassToAncestor = (selector, tagName, className) => {
    let el = document.querySelector(selector)?.parentElement;
    while (el && el.tagName !== tagName.toUpperCase()) el = el.parentElement;
    el?.classList.add(className);
  };

  const changeTdAttributes = (selector, oldHeight, newHeight, oldColor, newColor) => {
    document.querySelectorAll(selector).forEach(td => {
      if (td.getAttribute('height') === oldHeight && td.getAttribute('bgcolor') === oldColor) {
        td.setAttribute('height', newHeight);
        td.setAttribute('bgcolor', newColor);
      }
    });
  };

  const addTextBlock = (selector, className, text) => {
    const container = document.querySelector(selector);
    if (container) {
      const div = document.createElement('div');
      div.className = className;
      div.textContent = text;
      container.appendChild(div);
    }
  };

  // 🧩 TABLE 클래스 추가
  addClassToAncestorTable('#DivOptTable', 'sameTable');
  addClassToAncestorTable('.table_collapse', 'sameTable2');
  addClassToAncestorTable('.bbs', 'bssTable');
  addClassToAncestorTable('#list_table', 'boradTable');
  addClassToAncestorTable('img[src="/skins/board/img/top.gif"]', 'topTable');
  addClassToAncestorTable('a[href="javascript:reg_list();"]', 'btnTable');
  addClassToAncestorTable('.gTable2', 'boardWrite');
  addClassToAncestorTable('#a_line0', 'boardFaq');
  addClassToAncestorTable('.boardFaq', 'boardFaq2');
  addClassToAncestorTable('input[value="table_1742889190"]', 'faqWrite');
  addClassToAncestorTable('input[value="table_1742889051"]', 'qnaList');
  addClassToAncestorTable('input[value="table_1742889064"]', 'noticeList');
  addClassToAncestorTable('input[value="table_1744012380"]', 'eventBoard');
  addClassToAncestorTable('td[style="border:1px solid #d0cfd4;cursor:hand;"]', 'reviewProduct');
  addClassToAncestorTable('input[value="table_1742281392"]', 'productReview');

  // 🧩 특정 INPUT 값 기반으로 다음 SIBLING 에 class 추가
  addClassToNextSiblingsWithValue(['table_1742889064', 'table_1742281392'], 'boardTit');

  // 🧩 주문 목록 table에 class 추가
  const orderList = document.querySelector('input[value="orderlist"]')?.closest('form')?.querySelector('.bssTable');
  orderList?.classList.add('orderList');

  // 🧩 고객센터 제목 영역에 클래스 추가
  const customerTit = document.querySelector('.qnaList')?.querySelector('table[align="center"]');
  customerTit?.classList.add('boardTit');

  // 🧩 QnA 읽기 하단 테이블
  const qnaReadbtm = document.querySelector('.qnaList.boardRead')?.querySelector('table:nth-of-type(4)');
  qnaReadbtm?.classList.add('gTable3');

  // 🧩 이전/다음 버튼 포함된 테이블에 클래스 추가
  document.querySelectorAll('img[src="/skins/board/img/nboard/prev_txt.gif"], img[src="/skins/board/img/nboard/next_txt.gif"]').forEach(img => {
    let el = img.parentElement;
    while (el && el.tagName !== 'TABLE') el = el.parentElement;
    el?.classList.add('gTable3');
  });

  // 🧩 주문 테이블에 클래스 추가
  addClassToAncestorTable('.zTable2', 'jumunTable');

  // 🧩 boardTit의 상위 table에 boardRead 클래스 추가
  addClassToAncestor('.boardTit', 'table', 'boardRead');

  // 🧩 특정 td 요소 속성 변경
  changeTdAttributes('.jumunTable td', '2', '1', 'cccccc', '000000');

  // 🧩 로그인 영역에 텍스트 추가
  if (document.querySelector('.skin_login')) {
    addTextBlock('.skin_login', 'subTit', '로그인');
  }

  // 🧩 버튼 영역 class 추가
  const newCbtn = document.querySelector('.newCbtn');
  if (newCbtn) {
    newCbtn.parentElement.classList.add('btm_btn');
  }

  // 🧩 공지사항 페이지 제목 추가
  const noticePage = document.querySelector('input[value="table_1742889051"]')?.closest('.layout-contents');
  if (noticePage) {
    addTextBlock('.layout-contents', 'subTit', '공지사항');
  }
});
