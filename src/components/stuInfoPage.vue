<template>
  <div class="stuInfoPage">
    <div class="favicon">
    </div>
    <div class="profile list-block">
      <ul>
        <li>
          <div class="item-inner">
            <div class="item-title">地址：</div>
            <div class="item-after">{{user.url}}</div>
          </div>
        </li>
        <li>
          <div class="item-inner">
            <div class="item-title">用户名：</div>
            <div class="item-after">{{user.username}}</div>
          </div>
        </li>
        <li>
          <div class="item-inner">
            <div class="item-title">Email：</div>
            <div class="item-after">{{user.email}}</div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import {getUserInfo} from '../vuex/actions'
export default {
  data () {
    return {}
  },
  vuex: {
    getters: {
      user: ({auth}) => auth.user,
      auth: state => state.auth
    },
    actions: {
      getUserInfo
    }
  },
  ready: function () {
    this.getUserInfo()
    this.$dispatch('notify_route', 'stuInfoPage')
  }
}
</script>
<style type="text/css">
  .favicon{
    height: 150px;
    width: 150px;
    margin: auto;
    background: yellow;
  }
  .profile{
    width: 80%;
    margin: auto;
    margin-top: 30px;
  }
</style>
