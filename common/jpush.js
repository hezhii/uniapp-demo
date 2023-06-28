// 引入极光推送插件
var jpushModule = uni.requireNativePlugin("JG-JPush");

export default () => {
  console.log("init jpush")
  // 开启debug模式
  jpushModule.setLoggerEnable(true);
  // 初始化SDK
  jpushModule.initJPushService();

  // 连接状态回调
  jpushModule.addConnectEventListener(result => {
    let connectEnable = result.connectEnable
    // true已连接, false未连接
    console.log("jpush连接", connectEnable)
  })

  // 设置别名
  jpushModule.setAlias({
    "alias": "hezhou111",
    "sequence": 1
  })

  // 通知事件回调
  jpushModule.addNotificationListener(result => {
    // 通过 notificationEventType字段区分是收到通知还是点击通知
    const {
      notificationEventType,
      messageID,
      title,
      content,
      extras
    } = result
    if (notificationEventType == 'notificationOpened') {
      // 点击通知操作
    } else if (notificationEventType == 'notificationArrived') {
      // 收到通知
    }

    uni.showToast({
      icon: 'none',
      title: JSON.stringify(result),
      duration: 3000
    })
  })

  // 获取应用程序的 RegistrationID。 只有当应用程序成功注册到 JPush 的服务器时才返回对应的值，否则返回空字符串
  jpushModule.getRegistrationID(result => {
    if (result.registerID) {
      uni.setStorageSync("register_id", result.registerID)
    }
  })

  // 自定义消息，不会显示在通知栏里
  jpushModule.addCustomMessageListener(result => {
    console.log("自定义消息", result)
  })
}