#!/bin/sh

# 框架快速拉取脚本 ，注意，注意，注意：执行目录：本地工程根目录下执行
# 用法： sh pull_framework.sh action(默认是clone ，可以选择pull )

Name=$1
if [ ! $Name ]; then
    Name="clone"
fi

echo $Name
echo "start execute $Name "


 #构建组件层
componentLayerArray=("ComponentInterface" "EventComponent" "NetComponent"
                     "ThreadComponent" "ImageComponent" "ToolkitComponent"
                      "MtjComponent" "RouteComponent" "DuplicateJar"
                      "StructComponent" "UniAppComponent")

mkdir ComponentLayer
cd ComponentLayer

# shellcheck disable=SC2068
for componentVar in ${componentLayerArray[@]};
do
	echo $componentVar
if [ "$Name" != "pull" ];then


    if [ -d "$componentVar" ];then
    cd $componentVar
    find ./ -name '*.iml' -type f -print -exec rm -rf {} \;
    find ./ -type d -exec rmdir -p {} \;
    cd ./..
    fi

    git clone git@gitlab.zhugexuetang.cn:android/$componentVar.git
else
	cd $componentVar
	git pull
	cd ./..
fi
done

# 构建服务层
cd ..
serviceLayerArray=("ServiceInterfaces" "DatabaseService" "WebService"
                    "ImageloadService" "PaywizardService" "PassportService"
                    "LiveService" "ThrowingScreenService" "PushService"
                    "UniAppService" "RtcService" )

mkdir ServiceLayer
cd ServiceLayer
# shellcheck disable=SC2068
for serviceVar in ${serviceLayerArray[@]};
do
	echo $serviceVar
if [ "$Name" != "pull" ];then

  if [ -d "$serviceVar" ];then
    cd $serviceVar
    find ./ -name '*.iml' -type f -print -exec rm -rf {} \;
    find ./ -type d -exec rmdir -p {} \;
    cd ./..
    fi


	git clone git@gitlab.zhugexuetang.cn:android/$serviceVar
else
    cd $serviceVar
    git pull
    cd ./..
fi
done


# 构建支付sdk相关
cd ..
paymentLayerArray=("payment_android")

mkdir Payment
cd Payment
# shellcheck disable=SC2068
for paymentVar in ${paymentLayerArray[@]};
do
	echo $paymentVar
if [ "$Name" != "pull" ];then

    if [ -d "$paymentVar" ];then
    cd $paymentVar
    find ./ -name '*.iml' -type f -print -exec rm -rf {} \;
    find ./ -type d -exec rmdir -p {} \;
    cd ./..
    fi


	git clone git@gitlab.zhugexuetang.cn:android/$paymentVar
else
    cd $paymentVar
    git pull
    cd ./..
fi
done

# 构建账号服务相关
cd ..
passPortLayerArray=("passport_android")

mkdir Passport
cd Passport
# shellcheck disable=SC2068
for passportVar in ${passPortLayerArray[@]};
do
	echo $passportVar
if [ "$Name" != "pull" ];then

    if [ -d "$passportVar" ];then
    cd $passportVar
    find ./ -name '*.iml' -type f -print -exec rm -rf {} \;
    find ./ -type d -exec rmdir -p {} \;
    cd ./..
    fi

	git clone git@gitlab.zhugexuetang.cn:android/$passportVar
else
    cd $passportVar
    git pull
    cd ./..
fi
done



echo "congratulations ，pull finish  !!!"





