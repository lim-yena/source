window.addEventListener("DOMContentLoaded", () =>{
    let ancestorTable1 = document.getElementById('DivOptTable')?.parentElement;
    while (ancestorTable1 && ancestorTable1.tagName !== 'TABLE') ancestorTable1 = ancestorTable1.parentElement;
    ancestorTable1?.classList.add('sameTable');
    
    let ancestorTable2 = document.querySelector('.table_collapse')?.parentElement;
    while (ancestorTable2 && ancestorTable2.tagName !== 'TABLE') ancestorTable2 = ancestorTable2.parentElement;
    ancestorTable2?.classList.add('sameTable2');
    
    let ancestorTable = document.querySelector('.bbs')?.parentElement;
    while (ancestorTable && ancestorTable.tagName !== 'TABLE') ancestorTable = ancestorTable.parentElement;
    ancestorTable?.classList.add('bssTable');
      
    let targetTable = document.querySelector('#list_table')?.parentElement;
    while (targetTable && targetTable.tagName !== 'TABLE') targetTable = targetTable.parentElement;
    targetTable?.classList.add('boradTable');
      
    let inputs = document.querySelectorAll('input[value="table_1742889064"], input[value="table_1742281392"]');
    inputs.forEach(input => {
      let gTable3 = input?.nextElementSibling;
      while (gTable3 && !gTable3.classList.contains('gTable3')) {
        gTable3 = gTable3.nextElementSibling;
      }
      gTable3?.classList.add('boardTit');
    });
    
    
    
    let topTable = document.querySelector('img[src="/skins/board/img/top.gif"]')?.parentElement;
    while (topTable && topTable.tagName !== 'TABLE') {topTable = topTable.parentElement;}
    topTable?.classList.add('topTable');
      
      
    let btnTable = document.querySelector('a[href="javascript:reg_list();"]')?.parentElement;
    while (btnTable && btnTable.tagName !== 'TABLE') {btnTable = btnTable.parentElement;}
    btnTable?.classList.add('btnTable');
    
    
      
    let targetElement = document.querySelector('.gTable2')?.parentElement;
    while (targetElement && targetElement.tagName !== 'TABLE') {
    targetElement = targetElement.parentElement;}
    targetElement?.classList.add('boardWrite');
      
    
    let boardFaq = document.querySelector('#a_line0')?.parentElement;
    while (boardFaq && boardFaq.tagName !== 'TABLE') {
    boardFaq = boardFaq.parentElement;}
    boardFaq?.classList.add('boardFaq');
    
      
    let faqBoard = document.querySelector('.boardFaq')?.parentElement;
    while (faqBoard && faqBoard.tagName !== 'TABLE') {
    faqBoard = faqBoard.parentElement;}
    faqBoard?.classList.add('boardFaq2');
      
    
    let faqWrite = document.querySelector('input[value="table_1742889190"]')?.parentElement;
    while (faqWrite && faqWrite.tagName !== 'TABLE') faqWrite = faqWrite.parentElement;
    faqWrite?.classList.add('faqWrite');
      
      
    let qnaList = document.querySelector('input[value="table_1742889051"]')?.parentElement;
    while (qnaList && qnaList.tagName !== 'TABLE') qnaList = qnaList.parentElement;
    qnaList?.classList.add('qnaList');
      
      
    let noticeList = document.querySelector('input[value="table_1742889064"]')?.parentElement;
    while (noticeList && noticeList.tagName !== 'TABLE') noticeList = noticeList.parentElement;
    noticeList?.classList.add('noticeList');


    let eventBoard = document.querySelector('input[value="table_1744012380"]')?.parentElement;
    while (eventBoard && eventBoard.tagName !== 'TABLE') eventBoard = eventBoard.parentElement;
    eventBoard?.classList.add('eventBoard');


      
      
    let orderList = document.querySelector('input[value="orderlist"]')?.closest('form').querySelector('.bssTable');
    orderList?.classList.add('orderList');
    
    
    let customerTit = document.querySelector('.qnaList')?.querySelector('table[align="center"]');
    customerTit?.classList.add('boardTit');
    
    
    let qnaReadbtm = document.querySelector('.qnaList.boardRead')?.querySelector('table:nth-of-type(4)');
    qnaReadbtm?.classList.add('gTable3');
      
    
    // 두 개의 img 요소를 모두 선택
    const imgElements = document.querySelectorAll('img[src="/skins/board/img/nboard/prev_txt.gif"], img[src="/skins/board/img/nboard/next_txt.gif"]');
    
    imgElements.forEach(img => {
        let gTableAdd = img?.parentElement;
        while (gTableAdd && gTableAdd.tagName !== 'TABLE') {gTableAdd = gTableAdd.parentElement;}
        gTableAdd?.classList.add('gTable3');
    });
    
    
    
      
    let jumunTable = document.querySelector('.zTable2')?.parentElement;
    while (jumunTable && jumunTable.tagName !== 'TABLE') jumunTable = jumunTable.parentElement;
    jumunTable?.classList.add('jumunTable');
    
    
    let tdElements = document.querySelectorAll('.jumunTable td');
      
    
    let ancestorElement = document.querySelector('.boardTit')?.parentElement;
    while (ancestorElement && ancestorElement.tagName !== 'TABLE') {
    ancestorElement = ancestorElement.parentElement;}
    ancestorElement?.classList.add('boardRead');
      
    
    tdElements.forEach(td => {
      if (td.getAttribute('height') === '2' && td.getAttribute('bgcolor') === 'cccccc') {
        td.setAttribute('height', '1');
        td.setAttribute('bgcolor', '000000');
      }
    });
      
    let reviewProduct = document.querySelector('td[style="border:1px solid #d0cfd4;cursor:hand;"]')?.parentElement;
    while (reviewProduct && reviewProduct.tagName !== 'TABLE') {reviewProduct = reviewProduct.parentElement;}
    reviewProduct?.classList.add('reviewProduct');
    
      
    let productReview = document.querySelector('input[value="table_1742281392"]')?.parentElement;
    while (productReview && productReview.tagName !== 'TABLE') {productReview = productReview.parentElement;}
    productReview?.classList.add('productReview');
      
    
    
    document.querySelector('.skin_login').appendChild(Object.assign(document.createElement('div'), { className: 'subTit', textContent: '로그인' }));
    
    document.querySelector('.newCbtn').parentElement.classList.add('btm_btn');
      
      
      
    let noticePage = document.querySelector('input[value="table_1742889051"]')?.closest('.layout-contents');
    
    if (noticePage) {
      let newDiv = document.createElement('div'); // 새로운 div 요소 생성
      newDiv.classList.add('subTit'); // 'subTit' 클래스 추가
      newDiv.textContent = '공지사항'; // '공지사항' 텍스트 추가
      noticePage.appendChild(newDiv); // .layout-contents의 자식으로 새로운 div 추가
    }
    
    
});