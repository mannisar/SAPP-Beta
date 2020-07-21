import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function cetakDokumen(data) {
  console.log("pdf props", data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{data.no_dokumen}</Text>
        </View>
        <View style={styles.section}>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      </Page>
    </Document>
  );
}
