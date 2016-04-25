<template>
  <!-- 表单 begin -->
  <validator name="validation1">
    <form>
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">学号</div>
                <div class="item-input">
                  <input type="text" placeholder="Your ID" v-model = "username"/>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">密码</div>
                <div class="item-input">
                  <input type="password" placeholder="Your Password"  v-model = "password"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="errors">
        <p v-if="$validation1.username.required">Required your name.</p>
        <p v-if="$validation1.password.required">Your comment is too long.</p>
      </div>
      <!-- 表单 end -->
      <a class="button button-big button-fill button-success" @click = "login">登陆</a>
    </form>
  </validator>
</template>
<script>
import {localLogin} from '../vuex/actions'
export default {
  data () {
    return {
      user: {
        username: '113',
        password: 'admin113'
      }
    }
  },
  vuex: {
    getters: {
      logins: ({logins}) => logins.items,
      token: ({auth}) => auth.token
    },
    actions: {
      localLogin
    }
  },
  methods: {
    login: function () {
      this.localLogin(this.user)
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'loginPage')
  }
}
</script>