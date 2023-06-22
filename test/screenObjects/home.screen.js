class HomeScreen {
  get componenteEyes() {
    return $(
      '//android.view.ViewGroup[@content-desc="show-balance"]/android.widget.TextView'
    );
  }

  get componenteSaldo() {
    return $(
      '//android.widget.TextView[@content-desc="user-balance"]'
    )
  }
}

module.exports = new HomeScreen();
