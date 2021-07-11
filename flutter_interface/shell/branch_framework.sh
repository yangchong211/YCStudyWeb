#!/bin/sh

# 框架快速拉取脚本 ，注意，注意，注意：执行目录：本地工程根目录下执行
# 用法： sh pull_framework.sh action(默认是branch ，可以选择checkout )

Name=$1
BranchName=$2
if [ ! $Name ]; then
    Name="branch"
fi

echo $Name $BranchName
echo "start execute $Name "


# 构建组件层
componentLayerArray=("ComponentInterface" "EventComponent" "NetComponent" "ThreadComponent" "ImageComponent"
 "ToolkitComponent" "MtjComponent" "RouteComponent" "DuplicateJar"  "StructComponent")

cd ComponentLayer

for componentVar in ${componentLayerArray[@]};
do
	echo $componentVar
if [ "$Name" != "branch" ];then
    cd $componentVar
    git checkout $BranchName
    cd ./..
else
	cd $componentVar
	git branch $BranchName
	git push origin $BranchName
	cd ./..
fi
done


# 构建serviceLayer
cd ..
serviceLayerArray=("ServiceInterfaces" "WebService" "ImageloadService" "PassportService" "DatabaseService")

cd ServiceLayer
for serviceVar in ${serviceLayerArray[@]};
do
	echo $serviceVar
if [ "$Name" != "branch" ];then
    cd $serviceVar
	git checkout $BranchName
	cd ./..
else
    cd $serviceVar
    git branch $BranchName
    git push origin $BranchName
    cd ./..
fi
done

# 拉取BuildSystem
cd ..

if [ "$Name" != "branch" ]; then
     cd  BuildSystem
    git checkout $BranchName
     cd ./..
else
    cd  BuildSystem
    git branch $BranchName
    git push origin $BranchName
    cd ./..
fi

# 构建主工程
# 拉取主工程代码
if [ "$Name" != "branch" ]; then
     cd ZgRead
     git checkout $BranchName
     cd ./..
else
    cd ZgRead
    git branch $BranchName
    git push origin $BranchName
    cd ./..
fi

if [ "$Name" != "branch" ]; then
    cd ./ZgRead/BuildExtension
    echo "create setting.gradle"
    cp settings.gradle ./../../
    echo "create build.gradle"
    cp build.gradle ./../../
    echo "good，checkout finish"
else
    echo "congratulations ，branch finish  !!!"
fi





