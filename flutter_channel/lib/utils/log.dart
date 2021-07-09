const DEBUG = false;

void log(String content, {dynamic value = ''}) {
  if (DEBUG) print('$content ==> ${value}');
}