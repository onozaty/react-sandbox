## 第1章 こんにちはReact

bento/ubuntu-18.04 に環境を作成。

```console
sudo apt install git
git clone https://github.com/anyenv/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(anyenv init -)"' >> ~/.bash_profile
```

anyenv が入った。

```
vagrant@vagrant:~$ exec $SHELL -l
ANYENV_DEFINITION_ROOT(/home/vagrant/.config/anyenv/anyenv-install) doesn't exist. You can initialize it by:
> anyenv install --init
vagrant@vagrant:~$ anyenv --version
anyenv 1.1.2-1-g67d402f
```

anyenv-install を入れる。

```
vagrant@vagrant:~$ anyenv install --init
Manifest directory doesn't exist: /home/vagrant/.config/anyenv/anyenv-install
Do you want to checkout ? [y/N]: y
Cloning https://github.com/anyenv/anyenv-install.git master to /home/vagrant/.config/anyenv/anyenv-install...
Cloning into '/home/vagrant/.config/anyenv/anyenv-install'...
remote: Enumerating objects: 62, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 62 (delta 1), reused 1 (delta 0), pack-reused 57
Unpacking objects: 100% (62/62), done.

Completed!
vagrant@vagrant:~$
```

nodenv を入れる。

```
anyenv install nodenv
exec $SHELL -l
```

anyenv-update を入れる。

```
mkdir -p $(anyenv root)/plugins
git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
```

nodenv-default-packages を入れる。

```
git clone https://github.com/nodenv/nodenv-default-packages.git "$(nodenv root)/plugins/nodenv-default-packages"
touch $(nodenv root)/default-packages
```

nodenvで現時点の最新が16.2.0だったので。

```
nodenv install 16.2.0
```

14.4も入れると出ていたので。

```
nodenv install 14.4.0
nodenv global 14.4.0
```
