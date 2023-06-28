export const TUICallKit = uni.requireNativePlugin('TencentCloud-TUICallKit');
const TUICallKitEvent = uni.requireNativePlugin('globalEvent');

const options = {
  SDKAppID: 1400501381, // 请替换为步骤一取到的 SDKAppID
  userID: 'hezhou1', // 请替换为您的 UserID
  userSig: 'eJwtzD0PgjAUheH-0lWDt8hVIHFoIA6CA8HRRWmBm0ZpChI-4n8XgfE8J3k-7JTmTq8sC5nrAFuOm6S6d1TSyLV6182Dz1cr9cUYkizkHgACX-t8etTTkFWDI6ILAJN2dPvbxt8GLvcDnCtUDeWkSpNCHoRu4sjuBdr*qsWieHnZeZUcozg3JmijspfoZTv2-QHOwzI*', // 您可以在控制台中计算一个 UserSig 并填在这个位置
};

const TAG = '[TRTC]'

export const login = () => {
  TUICallKit.login(options, (res) => {
    if (res.code === 0) {
      console.log(TAG, 'TRlogin success');
    } else {
      console.log(TAG, `login failed, error message = ${res.msg}`);
    }
  });


  function handleError(res) {}
  TUICallKitEvent.addEventListener('onError', handleError);
  TUICallKitEvent.addEventListener('onCallReceived', (res) => {
    console.log('onCallReceived', JSON.stringify(res));
  });
  TUICallKitEvent.addEventListener('onCallCancelled', (res) => {
    console.log('onCallCancelled', res);
  });
  TUICallKitEvent.addEventListener('onCallBegin', (res) => {
    console.log('onCallBegin', JSON.stringify(res));
  });
  TUICallKitEvent.addEventListener('onCallEnd', (res) => {
    console.log('onCallEnd', JSON.stringify(res));
  });

  // 监听的事件要在页面退出时，要及时移除事件监听，移除方法 removeEventListener
  TUICallKitEvent.removeEventListener('onError', handleError);
}