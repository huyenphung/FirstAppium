$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenario",
  "description": "",
  "id": "registration-functionality-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 542498931,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify the first case",
  "description": "",
  "id": "registration-functionality-scenario;verify-the-first-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@order"
    },
    {
      "line": 3,
      "name": "@1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given I lauch app"
    }
  ],
  "line": 6,
  "name": "i click on preferences",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on Preference dependencies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i check on Wifi",
  "keyword": "And "
});
formatter.match({
  "location": "PreferenceTC.i_click_on_preferences()"
});
formatter.result({
  "duration": 14707658040,
  "status": "passed"
});
formatter.match({
  "location": "PreferenceTC.i_click_on_Preference_dependencies()"
});
formatter.result({
  "duration": 26323793821,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.xpath: //android.widget.TextView[@text\u003d\u00273. Preference dependencies\u0027]\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat Actions.HomepageAction.ClickOnPreferencedependencies(HomepageAction.java:37)\n\tat Stepdef.PreferenceTC.i_click_on_Preference_dependencies(PreferenceTC.java:33)\n\tat ✽.And i click on Preference dependencies(FeatureFiles/Register.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@345e5a17 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat Actions.HomepageAction.ClickOnPreferencedependencies(HomepageAction.java:37)\n\tat Stepdef.PreferenceTC.i_click_on_Preference_dependencies(PreferenceTC.java:33)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Phungs-MBP\u0027, ip: \u00272405:4800:149e:e73f:d158:34c3:47e0:396d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/phunghuyen/Exercise/..., appPackage: io.appium.android.apis, automationName: uiautomator2, databaseEnabled: false, desired: {app: /Users/phunghuyen/Exercise/..., automationName: uiautomator2, deviceName: Pixel2, platformName: android}, deviceApiLevel: 24, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 7.0, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 32a22fd0-5152-49ed-a1fe-bbbd57c25612\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[@text\u003d\u00273. Preference dependencies\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\t... 44 more\n",
  "status": "failed"
});
formatter.match({
  "location": "PreferenceTC.i_check_on_Wifi()"
});
formatter.result({
  "status": "skipped"
});
});