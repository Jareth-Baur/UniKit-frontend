import Card from "../../components/common/Card";
import ToolHeader from "../../components/tools/ToolHeader";
import EmptyState from "../../components/common/EmptyState";

function PDFTools() {
  return (
    <div className="page tool-page">

      <ToolHeader
        category="DOCUMENT TOOL"
        title="PDF Tools"
        description="A collection of free tools for working with PDF documents."
      />

      <Card>

        <EmptyState
          title="PDF tools are coming soon"
          description="More document utilities will be added to UniKit."
        />

      </Card>

    </div>
  );
}

export default PDFTools;