#!/bin/sh

# 框架快速拉取脚本 ，注意，注意，注意：执行目录：本地工程根目录下执行
# 用法： sh merge_framework.sh action(合并分支)如master分支合并 test分支，那么当前必须处于master分支上


BranchName=$1
Name="merge"


echo $Name $BranchName
echo "start execute $Name "


# 构建组件层
componentLayerArray=("ComponentInterface" "EventComponent" "NetComponent" "ThreadComponent" "ImageComponent"
 "ToolkitComponent" "MtjComponent" "RouteComponent" "DuplicateJar"  "StructComponent")


cd ComponentLayer

for componentVar in ${componentLayerArray[@]};
do
	echo $componentVar
if [ "$Name" == "merge" ];then
    cd $componentVar
    git merge $BranchName
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
if [ "$Name" == "merge" ];then
    cd $serviceVar
	git merge $BranchName
	cd ./..
fi
done

# 拉取BuildSystem
cd ..

if [ "$Name" == "merge" ]; then
     cd  BuildSystem
    git merge $BranchName
     cd ./..
fi

# 构建主工程
# 拉取主工程代码
if [ "$Name" == "merge" ]; then
     cd ZgRead
     git merge $BranchName
     cd ./..
fi

if [ "$Name" == "merge" ]; then

    echo "congratulations ，merge finish  !!!"
fi





