import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const AMBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create root element
    const root = am5.Root.new(chartRef.current);

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Data
    const data = [
      { name: "Monica", steps: 45688, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg" } },
      { name: "Joey", steps: 35781, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg" } },
      { name: "Ross", steps: 25464, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg" } },
      { name: "Phoebe", steps: 18788, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg" } },
      { name: "Rachel", steps: 15465, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg" } },
      { name: "Chandler", steps: 11561, pictureSettings: { src: "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg" } },
    ];

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        paddingRight: 30,
        wheelX: "none",
        wheelY: "none"
      })
    );

    // Create axes
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "name",
        renderer: am5xy.AxisRendererY.new(root, { minorGridEnabled: true, grid: { visible: false } }),
        paddingRight: 40
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 80, minorGridEnabled: true })
      })
    );

    // Add series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Steps",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "steps",
        categoryYField: "name",
        sequencedInterpolation: true,
        calculateAggregates: true,
        maskBullets: false,
        tooltip: am5.Tooltip.new(root, {
          dy: -30,
          pointerOrientation: "vertical",
          labelText: "{valueX}"
        })
      })
    );

    series.columns.template.setAll({
      strokeOpacity: 0,
      cornerRadiusBR: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusTL: 10,
      maxHeight: 50,
      fillOpacity: 0.8
    });

    const circleTemplate = am5.Template.new({});

    series.bullets.push((root, series, dataItem) => {
      const bulletContainer = am5.Container.new(root, {});
      const circle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 34 }, circleTemplate)
      );

      const maskCircle = bulletContainer.children.push(
        am5.Circle.new(root, { radius: 27 })
      );

      const imageContainer = bulletContainer.children.push(
        am5.Container.new(root, {
          mask: maskCircle
        })
      );

      const image = imageContainer.children.push(
        am5.Picture.new(root, {
          templateField: "pictureSettings",
          centerX: am5.p50,
          centerY: am5.p50,
          width: 60,
          height: 60
        })
      );

      return am5.Bullet.new(root, {
        locationX: 0,
        sprite: bulletContainer
      });
    });

    series.set("heatRules", [
      { dataField: "valueX", min: am5.color(0xe5dc36), max: am5.color(0x5faa46), target: series.columns.template, key: "fill" },
      { dataField: "valueX", min: am5.color(0xe5dc36), max: am5.color(0x5faa46), target: circleTemplate, key: "fill" }
    ]);

    series.data.setAll(data);
    yAxis.data.setAll(data);

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("visible", false);
    cursor.lineY.set("visible", false);

    cursor.events.on("cursormoved", () => {
      const dataItem = series.get("tooltip").dataItem;
      if (dataItem) {
        handleHover(dataItem);
      } else {
        handleOut();
      }
    });

    function handleHover(dataItem) {
      if (dataItem && currentlyHovered !== dataItem) {
        handleOut();
        currentlyHovered = dataItem;
        const bullet = dataItem.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 1,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }

    function handleOut() {
      if (currentlyHovered) {
        const bullet = currentlyHovered.bullets[0];
        bullet.animate({
          key: "locationX",
          to: 0,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }
    }

    let currentlyHovered;

    series.columns.template.events.on("pointerover", e => handleHover(e.target.dataItem));
    series.columns.template.events.on("pointerout", () => handleOut());

    series.appear();
    chart.appear(1000, 100);

    // Cleanup function to dispose of the chart instance when the component unmounts
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default AMBarChart;
