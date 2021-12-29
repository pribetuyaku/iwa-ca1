<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<table id="menuGames" border="1" class="indent">
    <thead>
        <tr>
            <th>Select</th>
            <th>Title</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <xsl:for-each select="//section">
            <tr>
                <td colspan="3">
                    <xsl:value-of select="@name" />
                </td>
            </tr>
            <xsl:for-each select="entry">
                <tr id="{position()}">
                    <xsl:attribute name="multiplayer">
                        <xsl:value-of select="boolean(@multiplayer)" />
                    </xsl:attribute>
                    <td align="center">
                        <input name="title0" type="checkbox" />
                    </td>
                    <td>
                        <xsl:value-of select="title" />
                    </td>
                    <td align="right">
                        <xsl:value-of select="price" />
                    </td>
                </tr>
            </xsl:for-each>
        </xsl:for-each>
    </tbody>
</table>
</xsl:template>
</xsl:stylesheet>