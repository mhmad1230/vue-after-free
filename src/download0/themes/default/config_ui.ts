(function () {
  log('Jailbreak UI Loaded')

  // تنظيف الشاشة
  jsmaf.root.children.length = 0

  // ستايل النص
  new Style({ name: 'white', color: 'white', size: 40 })

  // الخلفية
  const background = new Image({
    url: 'file:///../download0/img/multiview_bg_VAF.png',
    x: 0,
    y: 0,
    width: 1920,
    height: 1080
  })
  jsmaf.root.children.push(background)

  // زر الجلبريك (في المنتصف)
  const button = new Image({
    url: 'file:///assets/img/button_over_9.png',
    x: 760,
    y: 440,
    width: 400,
    height: 100
  })
  jsmaf.root.children.push(button)

  // نص الزر
  const text = new jsmaf.Text()
  text.text = "Jailbreak"
  text.x = 900
  text.y = 480
  text.style = 'white'
  jsmaf.root.children.push(text)

  // زر التأكيد (X أو O حسب النظام)
  const confirmKey = jsmaf.circleIsAdvanceButton ? 13 : 14

  // عند الضغط
  jsmaf.onKeyDown = function (keyCode) {
    if (keyCode === confirmKey) {
      log('Starting Jailbreak...')

      // تشغيل الجيلبريك (عدّل حسب مشروعك إذا لزم)
      if (typeof load_exploit === 'function') {
        load_exploit()
      } else if (typeof run === 'function') {
        run()
      } else if (typeof exploit === 'function') {
        exploit()
      } else {
        log('Exploit function not found')
      }
    }
  }

})()
