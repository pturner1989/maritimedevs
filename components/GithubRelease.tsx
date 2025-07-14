export default async function GithubRelease({repo}: {repo: string}) {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/releases/latest`,
      {
        next: { revalidate: 60 },
      }
    );

    const release = await res.json();
    const releaseDate = new Date(release.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="border border-gray-200 rounded-lg p-6 my-6 bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-100">
                        {release.name || release.tag_name}
                    </h3>
                    <span className="text-sm text-gray-500">{releaseDate}</span>
                </div>
            </div>
            
            {release.assets && release.assets.length > 0 && (
                <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-3">Downloads:</h4>
                    <div className="space-y-2">
                        {release.assets.map((asset: any) => (
                            <a
                                key={asset.id}
                                href={asset.browser_download_url}
                                className="flex items-center justify-between p-2 bg-gray-400 rounded hover:bg-gray-100 transition-colors"
                                download
                            >
                                <span className="text-sm font-medium text-gray-900">
                                    {asset.name}
                                </span>
                                <span className="text-xs text-gray-700">
                                    {(asset.size / 1024 / 1024).toFixed(1)} MB
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                    href={release.html_url} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub →
                </a>
            </div>
        </div>
    );
}