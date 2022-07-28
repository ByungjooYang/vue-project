const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugins.delete('prefetch'); //prefetch 삭제
    }
})

/*
prefetch 기능은 다른 화면에서 사용될 리소스를 미리 내려받아, 앱에서 화면 전환 시 빠른 성능을 가져온다.
단, prefetch 기능 사용 시 request 요청 수가 많아진다.
이 기능을 사용하지 않으면 요청 수가 훨씬 줄어든다. 물론 한 번 가져온 리소스는 다시 요청하지 않는다.

이 기능 사용 시 첫 화면 접속 시 랜더링 속도가 느려질 수도 있다.

따라서 라우터를 통해 이동되는 컴포넌트에서 사용되는 리소스가 크지 않다면 이 기능을 사용하지 않더라고 충분히 매끄럽게 동작할 수 있다.

이 기능을 삭제해도 lazy load로 컴포넌트를 사용할 수 있다.

컴포넌트 import로 다음과 같이 처리하면 된다.

import(/* webpackPrefetch: true / './views/About.vue');
*/