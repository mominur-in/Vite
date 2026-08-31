cd ~ && \
pkg install wget unzip -y && \
mkdir -p $HOME/android-sdk/cmdline-tools && \
cd $HOME/android-sdk && \
wget -O cmdline-tools.zip "https://dl.google.com/android/repository/commandlinetools-linux-15859902_latest.zip" && \
unzip -q cmdline-tools.zip -d cmdline-tools && \
mv cmdline-tools/cmdline-tools cmdline-tools/latest && \
rm cmdline-tools.zip && \
export ANDROID_HOME=$HOME/android-sdk && \
export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH && \
yes | sdkmanager --licenses >/dev/null && \
sdkmanager "platform-tools" "platforms;android-35" "build-tools;35.0.0" && \
echo "export ANDROID_HOME=\$HOME/android-sdk" >> ~/.bashrc && \
echo 'export PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH' >> ~/.bashrc
