// tryretool-custom-component-collections-global:@tryretool/custom-component-support
var { Retool } = window.ccc_support_RetoolCustomComponenCollections;

// react-jsx-runtime-global:react/jsx-runtime
var { Fragment, jsxs, jsx, default: default2 } = window.ccc_support_ReactJSXRuntime;

// src/index.tsx
var ImageIcon = () => {
  const [name, _setName] = Retool.useStateString({
    name: "name"
  });
  const [filename, _setFileName] = Retool.useStateString({
    name: "filename",
    initialValue: "https://purepng.com/public/uploads/large/purepng.com-messages-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596080zgne4.png"
  });
  const [circleColour, _setCircleColour] = Retool.useStateString({
    name: "circle hex value",
    initialValue: "#ff4d4d"
  });
  const [count, _setCount] = Retool.useStateNumber({
    name: "count",
    initialValue: 5
  });
  const clickEvent = Retool.useEventCallback({ name: "click" });
  var num = count > 99 ? "99+" : count;
  return /* @__PURE__ */ jsx("div", { onClick: () => clickEvent(), style: {
    position: "relative",
    height: "100%",
    // stretches to container height
    aspectRatio: "1 / 1",
    overflow: "hidden"
  }, children: /* @__PURE__ */ jsxs("div", { style: {
    position: "absolute",
    top: 0,
    left: 0,
    // defaults to left side
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsx("img", { src: filename, alt: "Sample Image", style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain"
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 20,
      width: "25%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      backgroundColor: circleColour,
      color: "white",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem"
    }, children: num })
  ] }) });
};
export {
  ImageIcon
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHJ5cmV0b29sLWN1c3RvbS1jb21wb25lbnQtY29sbGVjdGlvbnMtZ2xvYmFsOkB0cnlyZXRvb2wvY3VzdG9tLWNvbXBvbmVudC1zdXBwb3J0IiwgInJlYWN0LWpzeC1ydW50aW1lLWdsb2JhbDpyZWFjdC9qc3gtcnVudGltZSIsICIuLi9zcmMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcbiAgICAgICAgICBleHBvcnQgY29uc3QgeyBSZXRvb2wgfSA9IHdpbmRvdy5jY2Nfc3VwcG9ydF9SZXRvb2xDdXN0b21Db21wb25lbkNvbGxlY3Rpb25zO1xuICAgICAgICAiLCAiXG4gICAgICAgICAgZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeHMsIGpzeCwgZGVmYXVsdCB9ID0gd2luZG93LmNjY19zdXBwb3J0X1JlYWN0SlNYUnVudGltZTtcbiAgICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdHlwZSBGQyB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZXRvb2wgfSBmcm9tICdAdHJ5cmV0b29sL2N1c3RvbS1jb21wb25lbnQtc3VwcG9ydCdcblxuZXhwb3J0IGNvbnN0IEltYWdlSWNvbjogRkMgPSAoKSA9PiB7XG5cbiAgLy8gQ29tcG9uZW50IFZhcmlhYmxlc1xuICBjb25zdCBbbmFtZSwgX3NldE5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnbmFtZSdcbiAgfSlcbiAgY29uc3QgW2ZpbGVuYW1lLCBfc2V0RmlsZU5hbWVdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnZmlsZW5hbWUnLFxuICAgIGluaXRpYWxWYWx1ZTogXCJodHRwczovL3B1cmVwbmcuY29tL3B1YmxpYy91cGxvYWRzL2xhcmdlL3B1cmVwbmcuY29tLW1lc3NhZ2VzLWljb25zeW1ib2xzaWNvbnNhcHBsZS1pb3Npb3Npb3MtOC1pY29uc2lvcy04LTcyMTUyMjU5NjA4MHpnbmU0LnBuZ1wiXG4gIH0pXG4gIGNvbnN0IFtjaXJjbGVDb2xvdXIsIF9zZXRDaXJjbGVDb2xvdXJdID0gUmV0b29sLnVzZVN0YXRlU3RyaW5nKHtcbiAgICBuYW1lOiAnY2lyY2xlIGhleCB2YWx1ZScsXG4gICAgaW5pdGlhbFZhbHVlOiBcIiNmZjRkNGRcIlxuXG4gIH0pXG4gIGNvbnN0IFtjb3VudCwgX3NldENvdW50XSA9IFJldG9vbC51c2VTdGF0ZU51bWJlcih7XG4gICAgbmFtZTogJ2NvdW50JyxcbiAgICBpbml0aWFsVmFsdWU6IDVcbiAgfSlcbiAgLy8gQ2xpY2sgRXZlbnRcbiAgY29uc3QgY2xpY2tFdmVudCA9IFJldG9vbC51c2VFdmVudENhbGxiYWNrKHtuYW1lOiBcImNsaWNrXCJ9KVxuXG4gIC8vIENhcHMgdGhlIHVwcGVyIGRpc2xheSBudW1iZXIgYXQgOTlcbiAgdmFyIG51bSA9IGNvdW50ID4gOTkgPyBcIjk5K1wiIDogY291bnRcbiAgXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gY2xpY2tFdmVudCgpfSBzdHlsZT17e1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsICAgICAgICAvLyBzdHJldGNoZXMgdG8gY29udGFpbmVyIGhlaWdodFxuICAgICAgYXNwZWN0UmF0aW86IFwiMSAvIDFcIiwgXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiAwLCBsZWZ0OiAwLCAvLyBkZWZhdWx0cyB0byBsZWZ0IHNpZGVcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgIH19PlxuICAgICAgICA8aW1nIHNyYz17ZmlsZW5hbWV9IGFsdD1cIlNhbXBsZSBJbWFnZVwiIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIG9iamVjdEZpdDogXCJjb250YWluXCIsXG4gICAgICAgIH19IC8+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB6SW5kZXg6IDIwLFxuICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgIGFzcGVjdFJhdGlvOiBcIjEgLyAxXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2lyY2xlQ29sb3VyLFxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgICAgIH19PlxuICAgICAgICAge251bX1cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICApXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUNpQixJQUFNLEVBQUUsT0FBTyxJQUFJLE9BQU87OztBQ0ExQixJQUFNLEVBQUUsVUFBVSxNQUFNLEtBQUssU0FBQUEsU0FBUSxJQUFJLE9BQU87OztBQ0sxRCxJQUFNLFlBQWdCLE1BQU07QUFHakMsUUFBTSxDQUFDLE1BQU0sUUFBUSxJQUFJLE9BQU8sZUFBZTtBQUFBLElBQzdDLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxRQUFNLENBQUMsVUFBVSxZQUFZLElBQUksT0FBTyxlQUFlO0FBQUEsSUFDckQsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLEVBQ2hCLENBQUM7QUFDRCxRQUFNLENBQUMsY0FBYyxnQkFBZ0IsSUFBSSxPQUFPLGVBQWU7QUFBQSxJQUM3RCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFFaEIsQ0FBQztBQUNELFFBQU0sQ0FBQyxPQUFPLFNBQVMsSUFBSSxPQUFPLGVBQWU7QUFBQSxJQUMvQyxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDaEIsQ0FBQztBQUVELFFBQU0sYUFBYSxPQUFPLGlCQUFpQixFQUFDLE1BQU0sUUFBTyxDQUFDO0FBRzFELE1BQUksTUFBTSxRQUFRLEtBQUssUUFBUTtBQUkvQixTQUNFLG9CQUFDLFNBQUksU0FBUyxNQUFNLFdBQVcsR0FBRyxPQUFPO0FBQUEsSUFDdkMsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsRUFDWixHQUNFLCtCQUFDLFNBQUksT0FBTztBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsS0FBSztBQUFBLElBQUcsTUFBTTtBQUFBO0FBQUEsSUFDZCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsRUFDWixHQUNFO0FBQUEsd0JBQUMsU0FBSSxLQUFLLFVBQVUsS0FBSSxnQkFBZSxPQUFPO0FBQUEsTUFDNUMsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2IsR0FBRztBQUFBLElBRUwsb0JBQUMsU0FBSSxPQUFPO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsSUFDWixHQUNFLGVBQ0o7QUFBQSxLQUNKLEdBQ0Y7QUFFQTsiLAogICJuYW1lcyI6IFsiZGVmYXVsdCJdCn0K
