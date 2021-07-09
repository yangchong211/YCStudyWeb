const dartUniApiContent = """
class UniApi {
  static Function(String error) _errorTrackCallback = (String error) {
    print(error);
  };

  static void setErrorTrackCallback(Function(String error) newCallback) {
    if (newCallback == null) {
      return;
    }
    _errorTrackCallback = newCallback;
  }

  static void trackError(String error) {
    _errorTrackCallback?.call(error);
  }
}
""";