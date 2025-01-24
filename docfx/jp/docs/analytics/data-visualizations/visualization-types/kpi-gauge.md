---
title: 表示形式エディターで KPI ゲージを作成する方法
_description: Slingshot 分析で表示形式に KPI ゲージを使用する方法を説明します。
_language: ja
---

# KPI ゲージ

KPI (Key Performance Indicator: キー パフォーマンス インジケーター) とは、パフォーマンス管理の特定のタイプを表す用語です。KPI は個別のニーズによって変化し、目標に対する進捗や時間軸での傾向など、組織の重要なメトリックスに関する情報を提供します。

[テキスト ゲージ](gauge-charts.md#テキスト-ゲージ)と同様に、KPI ゲージは **[値]** 列を大きなフォントで表示します。ただし、KPI の値は、前の期間の同じ値に対しても評価されます。

<img src="images/kpi-gauge-visualization-example.png" alt="KPI Gauge visualization example" class="responsive-img" width="80%"/>

**カテゴリ**を追加すると、1 つの表示形式に複数の KPI を含めることもできます。

<img src="images/multiple-kpi-gauges.png" alt="Multiple KPI Gauges" class="responsive-img" width="80%"/>

## インジケーター設定

KPI ゲージには[スパークライン](sparkline-charts.md)表示形式と同様の設定があり、それを使用して以下を構成できます:

  - **[期間]** - 両方の値を比較するために使用する期間。

  - **[差異の表示]** - 差異を [値]、[パーセンテージ]、または [値とパーセンテージ] の両方として表示するかどうか。

  - **[値の増加を表す色]** - 差異インジケーターの色。

<img src="images/kpi-gauge-settings.png" alt="Advanced Settings KPI Gauge" class="responsive-img" width="80%"/>
