$(function() {

  // 分数のヒントをクリックでオンオフ
  $('#hint').click(function() {
    $('#balloon').fadeToggle(200);
  });

  // CSSだけでホバーの色変えがきかなかったので補足
  $('#hint p').hover(
    function() {
      $('#hint .fa-question-circle').css('color', '#716557');
    },
    function() {
      $('#hint .fa-question-circle').css('color', '#af977b');
    }
  )


  // 1つ目のクリアボタン
  $('#clear-btn1').click(function() {
    $('.step1 input').val('');
  });


  // 2つ目のクリアボタン
  $('#clear-btn2').click(function() {
    $('.result input').val('');
  });


  // 計算ボタン
  $('#convert-btn').click(function() {

    // 〇人前の数値を取得
    const originalPortion = $('#original-portion').val();
    const convertedPortion = $('#converted-portion').val();

    // レシピ通りの分量の数値を取得
    const r1 = $('#r1').val();
    const r2 = $('#r2').val();
    const r3 = $('#r3').val();
    const r4 = $('#r4').val();
    const r5 = $('#r5').val();
    const r6 = $('#r6').val();
    const r7 = $('#r7').val();
    const r8 = $('#r8').val();
    const r9 = $('#r9').val();
    const r10 = $('#r10').val();

    // 元の分量　÷　元の人数　×　作りたい人数
    const converted1 = r1 / originalPortion * convertedPortion;
    const converted2 = r2 / originalPortion * convertedPortion;
    const converted3 = r3 / originalPortion * convertedPortion;
    const converted4 = r4 / originalPortion * convertedPortion;
    const converted5 = r5 / originalPortion * convertedPortion;
    const converted6 = r6 / originalPortion * convertedPortion;
    const converted7 = r7 / originalPortion * convertedPortion;
    const converted8 = r8 / originalPortion * convertedPortion;
    const converted9 = r9 / originalPortion * convertedPortion;
    const converted10 = r10 / originalPortion * convertedPortion;

    // ↑ の計算式を表示する
    $('#a1').val(Math.round(converted1 * 100) / 100);
    $('#a2').val(Math.round(converted2 * 100) / 100);
    $('#a3').val(Math.round(converted3 * 100) / 100);
    $('#a4').val(Math.round(converted4 * 100) / 100);
    $('#a5').val(Math.round(converted5 * 100) / 100);
    $('#a6').val(Math.round(converted6 * 100) / 100);
    $('#a7').val(Math.round(converted7 * 100) / 100);
    $('#a8').val(Math.round(converted8 * 100) / 100);
    $('#a9').val(Math.round(converted9 * 100) / 100);
    $('#a10').val(Math.round(converted10 * 100) / 100);

    // 未入力だった欄は0じゃなくて未入力のまま反映する
    if (r2 === '') {
      $('#a2').val('');
    }

    if (r3 === '') {
      $('#a3').val('');
    }

    if (r4 === '') {
      $('#a4').val('');
    }

    if (r5 === '') {
      $('#a5').val('');
    }

    if (r6 === '') {
      $('#a6').val('');
    }

    if (r7 === '') {
      $('#a7').val('');
    }

    if (converted8 === 0) {
      $('#a8').val('');
    }

    if (converted9 === 0) {
      $('#a9').val('');
    }

    if (converted10 === 0) {
      $('#a10').val('');
    }

    // 入力した材料を反映させる
    $('#ai1').val($('#ri1').val());
    $('#ai2').val($('#ri2').val());
    $('#ai3').val($('#ri3').val());
    $('#ai4').val($('#ri4').val());
    $('#ai5').val($('#ri5').val());
    $('#ai6').val($('#ri6').val());
    $('#ai7').val($('#ri7').val());
    $('#ai8').val($('#ri8').val());
    $('#ai9').val($('#ri9').val());
    $('#ai10').val($('#ri10').val());


    // 入力した単位を反映させる
    $('#as1').val($('#rs1').val());
    $('#as2').val($('#rs2').val());
    $('#as3').val($('#rs3').val());
    $('#as4').val($('#rs4').val());
    $('#as5').val($('#rs5').val());
    $('#as6').val($('#rs6').val());
    $('#as7').val($('#rs7').val());
    $('#as8').val($('#rs8').val());
    $('#as9').val($('#rs9').val());
    $('#as10').val($('#rs10').val());


  }).css('cursor', 'pointer');






});
