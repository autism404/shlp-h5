const mixin = {
  created() {
    this.$toast.clear();
  },
  methods: {
    go (path) {
      this.$router.push(path);
    },
    laterGo (path) {
      setTimeout(() => {
        this.$router.push(path);
      }, 1500);
    },
    goBack () {
      this.$router.go(-1);
    },
    laterGoBack () {
      setTimeout(() => {
        this.goBack();
      }, 1500);
    },
    $warning (message) {
      this.$toast(message);
    },
    $error (message) {
      this.$toast(message);
    },
    $success (message) {
      this.$toast.success(message);
    },
    $loading (message) {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: message || '请稍后'
      });
    },
    $loadingClose () {
      this.$toast.clear();
    }
  },
  filters: {
    formatMoney: function (value, len = 2) {
      if (value) return value.toFixed(len);
      else return 0;
    },
    moneyFortmat (money) {
      if (money && money !== null) {
        money = String(money);
        let left = money.split('.')[0];
        let right = money.split('.')[1];
        right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right;
      } else if (money === 0) {
        return '0.00';
      } else {
        return '';
      }
    }
  }
};

export default mixin;
