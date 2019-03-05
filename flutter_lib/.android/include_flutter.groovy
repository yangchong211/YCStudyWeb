// Generated file. Do not edit.

//这两行是确定文件路径
def scriptFile = getClass().protectionDomain.codeSource.location.toURI()
def flutterProjectRoot = new File(scriptFile).parentFile.parentFile

//声明flutter的module，并设置module路径
gradle.include ':flutter'
gradle.project(':flutter').projectDir = new File(flutterProjectRoot, '.android/Flutter')

def plugins = new Properties()
def pluginsFile = new File(flutterProjectRoot, '.flutter-plugins')
if (pluginsFile.exists()) {
    pluginsFile.withReader('UTF-8') { reader -> plugins.load(reader) }
}

plugins.each { name, path ->
    def pluginDirectory = flutterProjectRoot.toPath().resolve(path).resolve('android').toFile()
    gradle.include ":$name"
    gradle.project(":$name").projectDir = pluginDirectory
}

gradle.getGradle().projectsLoaded { g ->
    g.rootProject.beforeEvaluate { p ->
        _mainModuleName = binding.variables['mainModuleName']
        if (_mainModuleName != null && !_mainModuleName.empty) {
            p.ext.mainModuleName = _mainModuleName
        }
    }
    g.rootProject.afterEvaluate { p ->
        p.subprojects { sp ->
            if (sp.name != 'flutter') {
                sp.evaluationDependsOn(':flutter')
            }
        }
    }
}
