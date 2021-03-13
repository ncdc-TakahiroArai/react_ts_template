# nipponhume-earthguide-frontend

## 事前準備

<!-- プロジェクト時のUIデザイン要件により下記を設定する。 -->

1.theme.ts でデザインテーマを設定

### node のインストール

```
nodenv install
```

## ローカル開発環境構築

### パッケージインストール

```
yarn
```

## 環境変数のコピー

config.development.ts を config.ts にコピー

```
cp config.development.ts config.ts
```

### ローカルサーバ起動（watch あり）

```
yarn dev
```

→ http://localhost:8000 でサーバが立ち上がる

## ビルド

```
yarn build
```
